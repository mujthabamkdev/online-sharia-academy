import { Component, computed, Signal, signal, WritableSignal } from '@angular/core';
import { SharedMaterialModule } from '../../shared-material/shared-material.module';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-custom-input',
  imports: [SharedMaterialModule, CommonModule, ReactiveFormsModule],
  templateUrl: './custom-input.component.html',
  styleUrl: './custom-input.component.scss'
})
export class CustomInputComponent {
  label: WritableSignal<string> = signal('');
  type: WritableSignal<string> = signal('text');
  control: WritableSignal<FormControl | null> = signal(null);

  value: Signal<string> = computed(() => this.control()?.value || '');
  touched: WritableSignal<boolean> = signal(false);

  errorMessages: Record<string, string> = {
    required: 'This field is required',
    minlength: 'Too short',
    maxlength: 'Too long',
    pattern: 'Invalid format'
  };

  errorMessage: Signal<string> = computed(() => {
    const control =  this.control();
    if(!this.touched() || !control || !control.errors) return '';
    const firstErrorKey = Object.keys(control.errors)[0];
    return this.errorMessages[firstErrorKey] || 'Invalid';
  });

  hasError(): boolean {
    return this.touched() && this.control()?.errors !== null;
  }

  onInput(event: Event):void {
    const value = (event.target as HTMLInputElement).value; 
    this.control()?.setValue(value, {emitEvent: false});
  }

  onBlur(){
    this.touched.set(true);
  }
}
