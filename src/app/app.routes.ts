import { Routes } from '@angular/router';
import { CounterComponent } from './pages/counter/counter';
import { HeroPageComponent } from './pages/hero/hero-page';
import { Dragonball } from './pages/dragonball/dragonball';
import { DragonballSuper } from './pages/dragonball-super/dragonball-super';

export const routes: Routes = [
{
    path: '',
    component: CounterComponent,
},
{
    path: 'hero',
    component: HeroPageComponent
},
{
    path:'dragonball',
    component: Dragonball
},
{
    path:'dragonball-super',
    component: DragonballSuper
},
{
    path: '**',
    redirectTo: '',
}
];
