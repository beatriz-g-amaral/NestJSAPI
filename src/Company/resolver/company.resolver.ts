import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { Company } from '../entity/company.entity';
import { CompanyService } from '../service/company.service';
import { CompanyInput } from '../dto/create-local.input';

@Resolver(() => Company)
export class CompanyResolver {
  constructor(private readonly companyService: CompanyService) {}

  @Query(() => Company)
  async findbyEmail(@Args('email') email: string): Promise<Company> {
    const result = await this.companyService.findOneByEmail(email);
    if (!result) {
      throw new Error(`Could not find Company with Email=${email}`);
    }
    return result;
  }

  @Query(() => Company)
  async findEmails(): Promise<Company[]> {
    return this.companyService.findAll();
  }

  @Mutation(() => Company)
  async createnewCompany(@Args('input') input: CompanyInput): Promise<Company> {
    return this.companyService.create(input);
  }
}
