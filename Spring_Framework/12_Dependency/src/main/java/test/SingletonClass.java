package test;

import java.util.logging.Logger;

public abstract class SingletonClass implements SingletonImpl{
	private PrototypeClass proto;
	public SingletonClass() {
		
	}
	public SingletonClass(PrototypeClass proto) {
		this.proto = proto;
		System.out.println("singleton class 생성");
	}
	public void setProto(PrototypeClass proto) {
		this.proto = proto;
	}
	public String get_info() {
		String info = proto.toString();
		return info;
	}
	
	public abstract PrototypeClass getProto();
}
