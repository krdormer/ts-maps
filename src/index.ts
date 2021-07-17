// Will import all subfiles into this one to be served together and bundled
import { Company } from './Company';
import { User } from './User';

const user = new User();
const company = new Company();

console.log(user);
console.log(company);
