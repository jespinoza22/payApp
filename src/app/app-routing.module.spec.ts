import { routes } from './app-routing.module';
import { AuthGuard } from './auth.guard';

describe('App Routing', () => {

    // beforeAll(() => {
    //     console.log('beforeAll');
    // });
    // beforeEach(() => {
    //     console.log('beforeEach');
    // });
    // afterAll(() => {
    //     console.log('afterAll');
    // });
    // afterEach(() => {
    //     console.log('afterEach');
    // });

    it('Should have app as path', () => {
        expect(routes[0].path).toBe('site');
    });
    // it('Should match the childrens', () => {
    //     expect(routes[0].children).toContain({
    //         path: 'income',
    //         canActivate: [AuthGuard],
    //         loadChildren: () => import('./website/Income/income.module').then(m => m.IncomeModule),
    //         data: { preload: true }
    //     });
    // });
});