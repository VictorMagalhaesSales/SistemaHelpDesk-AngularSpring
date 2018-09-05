import { TicketModel } from './../model/ticket.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HELP_DESK_API } from './helpdesk.api';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  constructor(private http: HttpClient) { }

  createOrUpdate(ticket: TicketModel){
    if(ticket.id != null && ticket.id != ''){
      return this.http.put(`${HELP_DESK_API}/api/ticket`,ticket);
    }else{
      ticket.id = null;
      ticket.status = "New";
      return this.http.post(`${HELP_DESK_API}/api/ticket`,ticket);
    }
  }

  findById(id: string){
    return this.http.get(`${HELP_DESK_API}/api/ticket/${id}`);
  }

  findAll(page: number, count: number){
    return this.http.get(`${HELP_DESK_API}/api/ticket/${page}/${count}`);
  }

  delete(id: string){
    return this.http.delete(`${HELP_DESK_API}/api/ticket/${id}`);
  }

  findByParams(page: number, count: number, assignedToMe: boolean, t: TicketModel){
    t.number = t.number == null ? 0 : t.number;
    t.title = t.title == '' ? 'uniformed' : t.title;  
    t.status = t.status == '' ? 'uniformed' : t.status;  
    t.priority = t.priority == '' ? 'uniformed' : t.priority;
    return this.http.get(`${HELP_DESK_API}/api/ticket/${page}/${count}/${t.number}/${t.title}/${t.status}/${t.priority}/${t.assignedUser}`);
  }

  changeStatus(status: string, ticket: TicketModel){
    return this.http.put(`${HELP_DESK_API}/api/ticket/${ticket.id}/${status}`,ticket);
  }

  summary(){
    return this.http.get(`${HELP_DESK_API}/api/ticket/summary`);
  }
}
