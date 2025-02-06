import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { UserComponent } from './user.component';
import { UserService } from './user.service';
import { DataService } from '../shared/data.service';

fdescribe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;
  let userService: UserService;
  let dataService: DataService

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    userService = fixture.debugElement.injector.get(UserService)
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should use the username from the service.', () => {
    expect(userService.user.name).toEqual(component.user.name);
  });

  it('should contain the username if loggedin', () => {
    component.isLoggedIn= true;
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('p')?.textContent).toContain(component.user.name);
  });

  it('should\'t contain the username if user is not loggedin', () => {
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('p')?.textContent).not.toContain(component.user.name);
  });

  it('should\'t fetch fata successfully if called aysnchronously', () => {
    let dataService = fixture.debugElement.injector.get(DataService)
    let spy = spyOn(dataService, 'getDetails').and.returnValue(Promise.resolve('Data'));
    fixture.detectChanges();  
    expect(component.data).toBe('');// the empty should be undefined but casuing an error.
  });

  
  it('should fetch fata successfully if called aysnchronously', async function() {
    let dataService = fixture.debugElement.injector.get(DataService)
    let spy = spyOn(dataService, 'getDetails').and.returnValue(Promise.resolve('Data'));
    fixture.detectChanges();
    fixture.whenStable().then(()=>{
      expect(component.data).toBe('Data');
    })
  });

  it('should fetch fata successfully if called aysnchronously using fakeAsync', fakeAsync(() => {
    let dataService = fixture.debugElement.injector.get(DataService)
    let spy = spyOn(dataService, 'getDetails').and.returnValue(Promise.resolve('Data'));
    fixture.detectChanges();
    tick();
      expect(component.data).toBe('Data');
  }));
});
