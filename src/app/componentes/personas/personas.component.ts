import { CommonModule } from '@angular/common';
import { IonicModule} from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { SupabaseService } from 'src/app/Service/supabase.service';
// 👇 ICONOS de Ionicons
import { addIcons } from 'ionicons';
import {
  callOutline,
  cashOutline,
  personCircleOutline,
  briefcaseOutline


} from 'ionicons/icons';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';


// ✅ Registramos solo los que necesitas
addIcons({
  'call-outline': callOutline,
  'cash-outline': cashOutline,
  'person-circle-outline': personCircleOutline,
  'briefcase-outline': briefcaseOutline,


});

@Component({
  selector: 'app-personas',
  standalone:true,
   imports: [CommonModule, IonicModule,FormsModule], 
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.scss'],
})
export class PersonasComponent  implements OnInit {
todos: any[] = [];
 personasFiltradas: any[] = [];
  searchTerm: string = '';

  constructor(
    private supabaseService: SupabaseService,
    private router: Router
  ) {}

  async ngOnInit() {
    await this.loadTodos();
  }

  async loadTodos() {
    const { data, error } = await this.supabaseService.getTodos();
    if (error) {
      console.error('Error fetching todos:', error);
    } else {
      this.todos = data;
       this.personasFiltradas = [...this.todos];
      
      
    }
  }
filtrarPersonas() {
  const termino = this.searchTerm.toLowerCase().trim();

  if (!termino) {
    this.personasFiltradas = this.todos; // sin filtro
    return;
  }

  this.personasFiltradas = this.todos.filter(persona =>
    persona.nombre.toLowerCase().includes(termino) ||
    persona.apellido.toLowerCase().includes(termino)
  );
}
  verDetalle(persona: any) {
  this.router.navigate(['/persona-detalle'], { state: { persona } });
}
}