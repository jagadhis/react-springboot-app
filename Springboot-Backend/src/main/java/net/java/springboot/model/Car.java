package net.java.springboot.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="cars")
public class Car {
		@Id
		@GeneratedValue(strategy = GenerationType.IDENTITY)
		private String id;
		@Column(name="car_name")
		private String Carname;
		@Column(name="car_num")
		private long Carnum;
		@Column(name="driver_name")
		private String Drivername;
		
		public Car() {
			
		}
		public Car(String id, String carname, long carnum, String drivername) {
			super();
			this.id = id;
			Carname = carname;
			Carnum = carnum;
			Drivername = drivername;
		}
		public String getId() {
			return id;
		}
		public void setId(String id) {
			this.id = id;
		}
		public String getCarname() {
			return Carname;
		}
		public void setCarname(String carname) {
			Carname = carname;
		}
		public long getCarnum() {
			return Carnum;
		}
		public void setCarnum(long carnum) {
			Carnum = carnum;
		}
		public String getDrivername() {
			return Drivername;
		}
		public void setDrivername(String drivername) {
			Drivername = drivername;
		}
		
}
