import '../styles/UserResults.css';
import Pdf from "react-to-pdf";
import { createRef, useRef } from 'react';

function UserResults(props) {
    const { results } = props;
    const pdfRef = useRef();

    const myRefs = useRef([]);
    myRefs.current = results.map((element, i) => myRefs.current[i] ?? createRef());



    function changeTheData(e) {

        let val = e.target.value
        let new_result = val.split(" ")[0];
        let new_unit = val.split(" ")[1];



        const toSend = {
            id: e.target.id,
            the_result: parseFloat(new_result.replace(',', '.')),
            unit: new_unit
        }

        props.changeTheVal(toSend);


    }
  return (
    <div className="userResults">
        <ul className='table' ref={pdfRef}>
            <li className='table__row table__row_h'>
                <p className='table__hp'>КОМПОНЕНТ</p>
                <p className='table__hp'>РЕЗУЛЬТАТ</p>
                <p className='table__hp'>НОРМА</p>
                <p className='table__hp'>КОММЕНТАРИЙ</p>
            </li>

            
            {Array.from(results).map((comp, id) => {
                return <li className='table__row' key={id}>
                            <p className='table__p'>{comp.component}</p>
                            <input id={comp.id} type="text" defaultValue={`${comp.the_result_str} ${comp.unit}`} onChange={(e) => changeTheData(e)} className="table__p " ref={myRefs.current[id]} />
                            <p className='table__p'>{comp.norm_max === -1 && comp.norm_min !== -1 ? `Выше ${comp.norm_min}` : comp.norm_max !== -1 && comp.norm_min === -1 ? `Ниже ${comp.norm_max}` : `${comp.norm_min_str} ${comp.norm_min !== -1 && comp.norm_max !== -1 ? "-" : ""} ${comp.norm_max_str}`}</p>
                            <p className='table__p' style={{color: comp.color}}>{comp.comment()}</p>
                        </li>
            })}
        </ul>

        <Pdf targetRef={pdfRef} filename="result.pdf" scale={0.8} x={.5} y={.5}>
            {({ toPdf }) => <p className='downloadPdf' onClick={toPdf}>Скачать результат (.pdf)</p>}
        </Pdf>
    </div>
  );
}

export default UserResults;
