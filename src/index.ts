// Will import all subfiles into this one to be served together and bundled
// import { Company } from './Company';
import { User } from './User';
import { CustomMap } from './CustomMap';

const user = new User();
const customMap = new CustomMap('map');

customMap.addUserMarker(user);
