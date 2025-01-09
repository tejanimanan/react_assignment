// import logo from './logo.svg';
import './App.css';
import Q1 from './Ass_question/Q1';
import Q2 from './Ass_question/Q2';
import Q3 from './Ass_question/Q3';
import Q4 from './Ass_question/Q4';
import Q5UserCard from './Ass_question/Q5UserCard';
import Q6Counter from './Ass_question/Q6Counter';
import Q7 from './Ass_question/Q7';
import Q8Input from './Ass_question/Q8Input';

function App() {
  return (
    <div className="App">
     <Q1/>
     <Q2/>
     <Q3 name="manan"/>
     <Q4/>
     <Q5UserCard username="manan" age="21" location="surat"/>
     <Q6Counter/>
     <Q7/>
     <Q8Input/>
    </div>
  );
}

export default App;
