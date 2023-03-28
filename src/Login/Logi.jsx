import logs from './logi.scss'
function Log() {
    return(
        <div className='log'>
            <div className='log_logo'>Plot<span>.my</span></div>
        <div className='log_block'>
            <div className="log_block_name">
                Login
            </div>
            <form className='log_form'>
                <input placeholder='Email'
                       className='log_form_input-one'/>
                <input placeholder='pass'
                       className='log_form_input-two'
                        />
            </form>
            <div className="log_btn">
                <div className='log_btn_txt'>Login</div>
            </div>
        </div>
        </div>
    )
}

export default Log