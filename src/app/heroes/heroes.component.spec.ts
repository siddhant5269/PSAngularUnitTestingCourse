import { of } from 'rxjs';
import { HeroesComponent } from './heroes.component';
describe('HeroesComponent', () => {
  let mockHeroService;
  let HEROES;
  let component;

  beforeEach(() => {
    HEROES = [
      { id: 1, name: 'Super Man', strength: 20 },
      { id: 2, name: 'Wonder Woman', strength: 24 },
      { id: 3, name: 'Bat Man', strength: 55 }
    ];

    mockHeroService = jasmine.createSpyObj(['deleteHero','getHeroes','addHero']);

    component = new HeroesComponent(mockHeroService);
  });

  describe('delete', () => {
    it('should delete an item from the list', () => {
      mockHeroService.deleteHero.and.returnValue(of(true));
      component.heroes = HEROES;
      component.delete(HEROES[2]);

      expect(component.heroes.length).toBe(2);

    });
    it('should have called delete hero method with correct arguments', () => {
      mockHeroService.deleteHero.and.returnValue(of(true));
      component.heroes = HEROES;
      component.delete(HEROES[2]);

      expect(mockHeroService.deleteHero).toHaveBeenCalledWith(HEROES[2]);

    });
  });
});
