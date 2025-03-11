import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicPlayer2Component } from './music-player2.component';

describe('MusicPlayer2Component', () => {
  let component: MusicPlayer2Component;
  let fixture: ComponentFixture<MusicPlayer2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MusicPlayer2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MusicPlayer2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
