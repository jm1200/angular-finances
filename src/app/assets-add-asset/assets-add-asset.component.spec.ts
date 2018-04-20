import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetsAddAssetComponent } from './assets-add-asset.component';

describe('AssetsAddAssetComponent', () => {
  let component: AssetsAddAssetComponent;
  let fixture: ComponentFixture<AssetsAddAssetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssetsAddAssetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssetsAddAssetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
