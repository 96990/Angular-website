import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { AppModule } from './app.module';
import { NavigationbarComponent } from './navigationbar/navigationbar.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let navigationBar: NavigationbarComponent;
  let declarations: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    navigationBar = fixture.debugElement.injector.get(NavigationbarComponent)
    const ngModule = TestBed.configureTestingModule({ imports: [AppModule] }).ngModule;
    declarations = (ngModule as any).ɵmod.declarations.map((d: { name: any; }) => d.name);
  });

  it('should create the app', () => {
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Angular-website'`, () => {
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Angular-website');
  });

  it('should render title', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h3')?.textContent).toContain('AKJ');
  });

  it('app navigation bar should be part of the ngmodule', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(declarations).toContain(navigationBar);
  });
});
