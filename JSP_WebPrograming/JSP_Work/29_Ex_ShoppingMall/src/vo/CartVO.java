package vo;

public class CartVO {
	
	private int p_idx; //일련번호
	private int c_idx;//카트일련번호
	private int p_price;//가격
	private int p_saleprice;//할인가
	private int amount;//장바구니 상품 총합
	private int m_idx;//회원번호
	private int c_cnt;//상품 수량
	private String p_num;//모델명
	private String p_name;//상품명
	private int sale_amount;	//장바구니 할인가 총합
	
	
	public int getP_idx() {
		return p_idx;
	}
	public void setP_idx(int p_idx) {
		this.p_idx = p_idx;
	}
	public int getC_idx() {
		return c_idx;
	}
	public void setC_idx(int c_idx) {
		this.c_idx = c_idx;
	}
	public int getP_price() {
		return p_price;
	}
	public void setP_price(int p_price) {
		this.p_price = p_price;
	}
	public int getP_saleprice() {
		return p_saleprice;
	}
	public void setP_saleprice(int p_saleprice) {
		this.p_saleprice = p_saleprice;
	}
	public int getAmount() {
		return amount;
	}
	public void setAmount(int amount) {
		this.amount = amount;
	}
	public int getM_idx() {
		return m_idx;
	}
	public void setM_idx(int m_idx) {
		this.m_idx = m_idx;
	}
	public int getC_cnt() {
		return c_cnt;
	}
	public void setC_cnt(int c_cnt) {
		this.c_cnt = c_cnt;
	}
	public String getP_num() {
		return p_num;
	}
	public void setP_num(String p_num) {
		this.p_num = p_num;
	}
	public String getP_name() {
		return p_name;
	}
	public void setP_name(String p_name) {
		this.p_name = p_name;
	}
	public int getSale_amount() {
		return sale_amount;
	}
	public void setSale_amount(int sale_amount) {
		this.sale_amount = sale_amount;
	}
	
	
	
}












