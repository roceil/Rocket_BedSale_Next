export function OrderForm() {
  return (
    <section className='orderInfo wrap' id='orderInfo'>
      <h3 className='section-title'>填寫預訂資料</h3>
      <form action='' className='orderInfo-form'>
        <div className='orderInfo-formGroup'>
          <label htmlFor='customerName' className='orderInfo-label'>
            姓名
          </label>
          <div className='orderInfo-inputWrap'>
            <input
              type='text'
              className='orderInfo-input'
              id='customerName'
              placeholder='請輸入姓名'
              name='姓名' />
            <p className='orderInfo-message' data-message='姓名'>
              必填
            </p>
          </div>
        </div>
        <div className='orderInfo-formGroup'>
          <label htmlFor='customerPhone' className='orderInfo-label'>
            電話
          </label>
          <div className='orderInfo-inputWrap'>
            <input
              type='tel'
              className='orderInfo-input'
              id='customerPhone'
              placeholder='請輸入電話'
              name='電話' />
            <p className='orderInfo-message' data-message='電話'>
              必填
            </p>
          </div>
        </div>
        <div className='orderInfo-formGroup'>
          <label htmlFor='customerEmail' className='orderInfo-label'>
            Email
          </label>
          <div className='orderInfo-inputWrap'>
            <input
              type='email'
              className='orderInfo-input'
              id='customerEmail'
              placeholder='請輸入 Email'
              name='Email' />
            <p className='orderInfo-message' data-message='Email'>
              必填
            </p>
          </div>
        </div>
        <div className='orderInfo-formGroup'>
          <label htmlFor='customerAddress' className='orderInfo-label'>
            寄送地址
          </label>
          <div className='orderInfo-inputWrap'>
            <input
              type='text'
              className='orderInfo-input'
              id='customerAddress'
              placeholder='請輸入寄送地址'
              name='寄送地址' />
            <p className='orderInfo-message' data-message='寄送地址'>
              必填
            </p>
          </div>
        </div>
        <div className='orderInfo-formGroup'>
          <label htmlFor='tradeWay' className='orderInfo-label'>
            交易方式
          </label>
          <div className='orderInfo-inputWrap'>
            <select id='tradeWay' className='orderInfo-input' name='交易方式'>
              <option defaultValue='ATM'>
                ATM
              </option>
              <option value='信用卡'>信用卡</option>
              <option value='超商付款'>超商付款</option>
            </select>
          </div>
        </div>
        <input type='submit' value='送出預訂資料' className='orderInfo-btn' />
      </form>
    </section>
  );
}
