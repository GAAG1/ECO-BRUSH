import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { briefcaseOutline } from 'ionicons/icons';
import { addIcons } from 'ionicons';


addIcons({
  'briefcase-Outline': briefcaseOutline,
});

@Component({
  selector: 'app-persona-detalle',
  standalone: true,
  imports: [CommonModule, IonicModule],
  templateUrl: './persona-detalle-page.component.html',
  styleUrls: ['./persona-detalle-page.component.scss'],
})
export class PersonaDetallePage implements OnInit {
  private router = inject(Router); // ✅ Aquí va Router, no RouterModule

  persona: any;

  ngOnInit(): void {
    const navigation = this.router.getCurrentNavigation();
    const state = navigation?.extras?.state as { persona?: any };

    if (state?.persona) {
      this.persona = state.persona;
    } else {
      console.error('No se encontraron datos de la persona.');
      // Opcional: redirigir si no hay persona
      // this.router.navigate(['/personas']);
    }
  }
}
