import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicHeadComponent } from './music-head.component';

describe('MusicHeadComponent', () => {
  let component: MusicHeadComponent;
  let fixture: ComponentFixture<MusicHeadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MusicHeadComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MusicHeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
