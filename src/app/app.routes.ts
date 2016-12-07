import {Routes,RouterModule} from '@angular/router';

import{BodyIndexComponent} from './body-index/body-index';
import{BodyDetailComponent} from './body-detail/body-detail';
import{AdminPageComponent} from './admin-page/admin-page';

export const rootRouterConfig: Routes = [
   { path: '', component: BodyIndexComponent},
   { path: 'detail/:id', component: BodyDetailComponent},
   { path: 'admin', component: AdminPageComponent},

];
