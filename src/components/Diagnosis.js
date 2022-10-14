import { useEffect, useState } from 'react';
import '../styles/Diagnosis.css';




function Diagnosis(props) {

    const {results, startSurvey} = props;

    const [diagnosis,  setDiagnosis] = useState("")


    useEffect(()=> {
        if (results.length > 0) {
            if (results[0].problem() === 1 && results[2].problem() === -1) {

                setDiagnosis("Первичный гипотиреоз")
            }
            else if (results[0].problem() === -1 && results[2].problem() === -1) {
                setDiagnosis("Центральный гипотиреоз")
            }
        }
        
    }, [results])

    return (
        <div className="diagnosis">
            <div className='card'>
                <div className='card__wr'>
                    <img src={require('../images/information-svgrepo-com.svg').default} alt="" className='card__svg' />
                    <h3 className='card__h3'>{diagnosis}:</h3>
                </div>
                <p className='card__p'>У вас имеются подозрения на {diagnosis}.</p>
                <p className='card__p'>Для более точного преддиагноза, детальной интерпретации результатов и рекомендации необходимых специалистов ответьте на несколько простых вопросов.</p>

                <div className='card__button-wr'>
                    <button className='card__button' onClick={startSurvey}>Ответить на вопросы</button>
                    <div className='card__time-wr'>
                        <img src={require('../images/time.svg').default} alt="" className='card__time-svg' />
                        <p className='card__p'>- 2 мин.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Diagnosis;
