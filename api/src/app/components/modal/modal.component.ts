import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Hero } from 'src/app/models';
import { TableDataHeader } from 'src/app/models/tableDataHeader';
import { Validators } from '@angular/forms';
import { ObservableHeroService } from 'src/app/services/observableHeroService';
import { takeUntil, first, Subject } from 'rxjs';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit, OnDestroy {
  displayedLabels: string[] = Object.values(TableDataHeader);
  displayedKeys: string[] = Object.keys(TableDataHeader);
  heroForm = this.formBuilder.group({
    nameLabel: ['', Validators.required],
    genderLabel: ['', Validators.required],
    citizenshipLabel: ['', Validators.required],
    skillsLabel: ['', Validators.required],
    occupationLabel: ['', Validators.required],
    memberOfLabel: ['', Validators.required],
    creatorLabel: ['', Validators.required],
    id: ['', Validators.required],
  });
  heroList: Hero[] = [];
  unsubcribe: Subject<void> = new Subject();

  constructor(
    public dialogRef: MatDialogRef<ModalComponent>,
    @Inject(MAT_DIALOG_DATA) public hero: Hero,
    private formBuilder: FormBuilder,
    private observableHeroService: ObservableHeroService
  ) {
    this.heroForm = this.formBuilder.group({
      nameLabel: ['', Validators.required],
      genderLabel: ['', Validators.required],
      citizenshipLabel: ['', Validators.required],
      skillsLabel: ['', Validators.required],
      occupationLabel: ['', Validators.required],
      memberOfLabel: ['', Validators.required],
      creatorLabel: ['', Validators.required],
      id: [''],
    });
  }

  ngOnInit(): void {
    this.observableHeroService.heroList
      .pipe(first(), takeUntil(this.unsubcribe))
      .subscribe((heroList: Hero[]) => {
        this.heroList = heroList;
      });

    if (this.hero) this.heroForm.patchValue(this.hero);
  }

  closeModal(): void {
    this.dialogRef.close();
  }

  createHero() {
    this.heroForm.patchValue({
      id: `${this.heroForm.value['nameLabel'].trim()}${this.heroForm.value[
        'citizenshipLabel'
      ].trim()}`,
    });
    this.observableHeroService.changeHeroList([
      this.heroForm.value,
      ...this.heroList,
    ]);
    this.dialogRef.close();
    this.heroForm.reset();
  }

  editHero() {
    this.heroList = this.heroList.map((hero: Hero) => {
      if (hero.id === this.heroForm.value.id) {
        hero = this.heroForm.value;
      }
      return hero;
    });
    this.observableHeroService.changeHeroList(this.heroList);
    this.dialogRef.close();
    this.heroForm.reset();
  }

  deleteHero() {
    this.heroList = this.heroList.filter(
      (hero: Hero) => hero.id !== this.hero.id
    );
    this.observableHeroService.changeHeroList(this.heroList);
    this.dialogRef.close();
    this.heroForm.reset();
  }

  ngOnDestroy(): void {
    this.unsubcribe.unsubscribe();
  }
}
