package com.example.demo.enums;


public enum StatusEnum {

	New,
	Assigned,
	Resolved,
	Approved,
	Disapproved,
	Closed;
	
	public static StatusEnum getStatus(String status) {
		switch(status) {
			case "New": return New;
			case "Assigned": return Assigned;
			case "Closed": return Closed;
			case "Resolved": return Resolved;
			case "Approved": return Approved;
			case "Disapproved": return Disapproved;
			default: return New;
		}
	}

}