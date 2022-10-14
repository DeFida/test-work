
import { createRef, useEffect, useRef, useState } from 'react';
import '../styles/Survey.css';




function Survey(props) {

    const survey = [
        {
            questionTopic: "Физикальное обследование",
            questions: [
                "Замечали ли Вы резкий, нецеленаправленный набор веса за последнее время?",
                "Замечали ли Вы появление оттеков на коже?",
                "Замечали ли Вы сухость и низкую температуру (холодная) кожи?",
                "Замечали ли Вы у себя снижения тембра голоса в последнее время?",
            ]
        },
        {
            questionTopic: "ЦНС",
            questions: [
                "Присутствует ли у Вас хроническая усталость или сонливость?",
                "Находитесь ли большую часть времени в течение дня в состоянии апатии или депрессии?",
                "Замечали ли Вы заторможенность, замедление движений и речи?",
                "Замечали ли Вы неспособность концентрировать внимание?",
            ]
        },

        {
            questionTopic: "Легкие",
            questions: [
                "Замечали ли Вы медленное поверхностное дыхание (не можете глубоко вдохнуть)?",
                "Ощущаете ли Вы гипоксию (недостаток воздуха)?",
            ]
        },

        {
            questionTopic: "Почки",
            questions: [
                "Испытываете ли задержки мочеиспускания?",
            ]
        },

        {
            questionTopic: "Нервно-мышечные нарушения",
            questions: [
                "Испытываете ли Вы периодические мышечные судороги?",
                "Испытываете ли Вы мышечную слабость?",
                "Испытываете ли Вы повышенную чувствительность кожи, спонтанное возникновение мурашек, покалывания, онемения или жжения кожи?",
            ]
        },
    ]


    const [moreDi, setMoreDi] = useState(false);

    const [sucres, setSucres] = useState(false);
    const [faires, setFaires] = useState(false);
    
    const refs = useRef([])


    refs.current = survey.map((e, i) => (e.questions).map((q, j) => [12,12, 12].map((s, o) => createRef())));


    function doneSurvey() {


        let alltrue = true;
        
        for (let i = 0; i < (refs.current).length; i++) {
            for (let j = 0; j < (refs.current)[i].length; j++) {


                if (((refs.current)[i][j]).every(val => val.current.checked === false)) {
                    alltrue = false;
                    break;
                }
            }
        }

        if (alltrue) {
            setMoreDi(true)
            setFaires(false)
            setSucres(true)
        }
        else {
            setMoreDi(false)
            setSucres(false)
            setFaires(true)
        }

    }


    return (
        <div className="survey">
            <h3 className='topic__head'>Вопросы: </h3>
            {Array.from(survey).map((topic, i) => {
                return  <div className='topic' key={i}>
                            <h3 className='topic__head'>{i + 1} {topic.questionTopic}</h3>
                            {Array.from(topic.questions).map((ques, j) => {
                                return <div className='topic__question_wr' key={j}>
                                    <p className='question'>{j + 1}) {ques}</p>
                                    <div className='inp__wr'>
                                        <input type="radio" value="Да" name={ques} ref={refs.current[i][j][0]} className="question__input" />
                                        <p className='question'>Да</p>
                                    </div>

                                    <div className='inp__wr'>
                                        <input type="radio" value="Нет" name={ques} ref={refs.current[i][j][1]} className="question__input" />
                                        <p className='question'>Нет</p>
                                    </div>

                                    <div className='inp__wr'>
                                        <input type="radio" value="Не знаю" name={ques} ref={refs.current[i][j][2]} className="question__input" />
                                        <p className='question'>Не знаю</p>
                                    </div>
                                </div>
                            })}
                        </div>
            })}

            <button className="survey__button" onClick={doneSurvey}>Отправить</button>

            {sucres && <p className='card__p'>Ваши ответы записаны!</p>}
            {faires && <p className='card__p'>Ответьте на все вопросы!</p>}
            {
                moreDi && <div className='cards'>
                <div className='cards__wr'>
                    <img src={require('../images/information-svgrepo-com.svg').default} alt="" className='cards__svg' />
                    <h3 className='cards__h3'>Доп. обследование:</h3>
                </div>
                <p className='cards__p'>Инструментальные исследования:</p>
                <ul className='cards__list'>
                    <li className='cards__p'>УЗИ щитовидной железы: нередко – уменьшение объема органа, возможны изменения, характерные для АИТ (Аутоиммунный тиреоидит), узловые и кистозные образования;</li>
                    <li className='cards__p'>ЭКГ: снижение вольтажа комплексов QRS, зубцов Т и Р, синусовая брадикардия,нарушение процессов реполяризации в миокарде желудочков;</li>
                    <li className="cards__p">ЭхоКГ при выраженной сердечной недостаточности.</li>
                </ul>
            </div>
            }
            
        </div>
    );
}

export default Survey;
