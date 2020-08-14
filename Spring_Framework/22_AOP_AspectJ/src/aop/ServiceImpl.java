package aop;

public class ServiceImpl implements Service{
	
	@Override
	public int get_min_number(int number) {
		
		//long start = System.currentTimeMillis();
		//System.out.println("서비스의 처리 속도를 계산합니다.");
		//==========Cross-cutting concern==========
		if(number > 10000) {
			throw new IllegalArgumentException("예외 : 10000 이상을 넘는 수는 계산하지 않습니다.");
		}
		//Primary(Core) concern
		int cnt = 0;
		for(int i = 1; i <= number; i++) {
			for(int j = 1; j <= number; j++) {
				if(i % j  == 0) {
					cnt++;
				}
			}
		}
		System.out.println("1~" + number + "까지 수의 약수의 개수의 합 : " + cnt);
		//Primary(Core) concern
		
		//==========Cross-cutting concern==========
		//long end = System.currentTimeMillis();
		//System.out.println("업무처리 시간 : " + (end - start) + "ms");
		
		return cnt;
	}
	public boolean is_prime(int n) {
		if (n == 1) {	
			return false;
		}
		for (int i = 2; i < n; i++) {	
			if (n % i == 0) {
				return false;
			}
		}
		return true;
	}
	
	@Override
	public int get_prime_number(int number) {
		//long start = System.currentTimeMillis();
		//System.out.println("서비스의 처리 속도를 계산합니다.");
		//==========Cross-cutting concern==========
		
		//Primary(Core) concern
		int cnt = 0;
		for(int i = 1; i <= number; i++) {
			if(is_prime(i)) {
				cnt++;
			}
		}
		System.out.println("1~" + number + "까지 수 중 소수의 개수 : " + cnt);
		//Primary(Core) concern
		
		//==========Cross-cutting concern==========
		//long end = System.currentTimeMillis();
		//System.out.println("업무처리 시간 : " + (end - start) + "ms");
		
		return cnt;
	}
}
