import { useState } from 'react';
import '../styles/UserInfo.css';

function UserInfo() {

    const [more, setMore] = useState(false);

  return (
    <div className="userInfo">
        <h3 className='user__analysis'>Анализ крови (содержание гормонов и медиаторов)</h3>

        <h4 className='user__name'>КАНАТОВ КАНАТ КАНАТОВИЧ</h4>

        <ul className='user__data'>
            <li className='user__data-row'><span className='user__data-row_d'>№ заявки:</span> 15565607</li>
            <li className='user__data-row'><span className='user__data-row_d'>Лаборатория и заказчик:</span>Процедурный кабинет "Сарыарка 24" - Нур-Султан</li>
            <li className='user__data-row'><span className='user__data-row_d'>Дата рождения:</span> 28.04.1976</li>
            <li className='user__data-row'><span className='user__data-row_d'>Дата заказа:</span> 20.07.2022 в 12:27</li>

            {more && 
            <>
                <li className='user__data-row'><span className='user__data-row_d'>Номен телефона:</span> +7 747 869 73 25</li>
                <li className='user__data-row'><span className='user__data-row_d'>Город проживания:</span>Нур-Султан</li>
            </>
            }

            <li className='user__more' onClick={() => setMore(!more)}>{more ? "Скрыть ᐃ" : "Подробнее ᐁ"} </li>
        </ul>


    </div>
  );
}

export default UserInfo;
