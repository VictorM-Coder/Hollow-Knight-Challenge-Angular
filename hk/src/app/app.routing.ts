import { ModuleWithProviders } from "@angular/core"
import { RouterModule, Routes } from "@angular/router"
import { AboutusPage } from "./aboutus-page/aboutus-page"
import { AdvertsPage } from "./adverts-page/adverts-page"
import { HomePage } from "./home-page/home-page"

const ROUTES: Routes = [
    {path: '', component: HomePage},
    {path: 'adverts', component: AdvertsPage},
    {path: 'aboutus', component: AboutusPage}
]

export const ROUTING:ModuleWithProviders<RouterModule> = RouterModule.forRoot(ROUTES)

