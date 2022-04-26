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
		@Column(name="start_km")
		private String Startkm;
	
		@Column(name="end_km")
		private String Endkm;
		@Column(name="total_hr")
		private String TotalHr;
		@Column(name="total_km")
		private String TotalKm;
		@Column(name="amount")
		private String Amount;
		
		public Car() {
			
		}
		public Car(String id, String carname, long carnum, String drivername,String startkm ,String endkm,String totalHr,String totalKm, String amount) {
			super();
			this.id = id;
			Carname = carname;
			Carnum = carnum;
			Drivername = drivername;
			Startkm = startkm;
			Endkm = endkm;
			TotalHr =totalHr;
			TotalKm = totalKm;
			Amount = amount;
			
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
		public String getStartkm() {
			return Startkm;
		}
		public void setStartkm(String startkm) {
			Startkm = startkm;
		}
		public String getEndkm() {
			return Endkm;
		}
		public void setEndkm(String endkm) {
			Endkm = endkm;
		}
		public String getTotalHr() {
			return TotalHr;
		}
		public void setTotalHr(String totalHr) {
			TotalHr = totalHr;
		}
		public String getTotalKm() {
			return TotalKm;
		}
		public void setTotalKm(String totalKm) {
			TotalKm = totalKm;
		}
		public String getAmount() {
			return Amount;
		}
		public void setAmount(String amount) {
			Amount = amount;
		}
		
}
