import { HeroesComponent } from './heroes.component';
// tslint:disable-next-line: import-blacklist
import { of } from 'rxjs';
import { Hero } from '../hero';

describe('HeroesComponent', () => {

    let component: HeroesComponent;
    let HEROES: Hero[];
    let mockHeroService;

    beforeEach(() => {
        HEROES = [
            { id: 1, name: 'SpiderDude', strength: 8 },
            { id: 2, name: 'Wonderful Woman', strength: 24 },
            { id: 3, name: 'SuperDude', strength: 55 },
        ];

        mockHeroService = jasmine.createSpyObj(['getHeroes', 'addHero', 'deleteHero']);
        component = new HeroesComponent(mockHeroService);
    });

    describe('delete', () => {
        it('should remove the indeicated hero from the heroes list.', () => {
            mockHeroService.deleteHero.and.returnValue(of(true));

            component.heroes = HEROES;
            component.delete(HEROES[2]);

            expect(component.heroes.length).toBe(2);
        });

        it('should call deleteHero', () => {
            mockHeroService.deleteHero.and.returnValue(of(true));

            component.heroes = HEROES;
            component.delete(HEROES[2]);

            expect(mockHeroService.deleteHero).toHaveBeenCalled();
            expect(mockHeroService.deleteHero).toHaveBeenCalledWith(HEROES[2]);
        });
    });
});
