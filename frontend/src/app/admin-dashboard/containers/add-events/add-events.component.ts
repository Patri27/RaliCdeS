import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'rcs-add-events',
  templateUrl: './add-events.component.html',
  styleUrls: ['./add-events.component.scss']
})
export class AddEventsComponent {
  eventForm = this.fb.group(
    {
      name: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(60)]],
      description: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(100)]],
      date: ['', [Validators.required]],
      location: ['', [Validators.required]]
    }
  );

  constructor(private fb: FormBuilder) { }
}
