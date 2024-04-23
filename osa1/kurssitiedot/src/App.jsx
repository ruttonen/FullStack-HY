const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}

const Part = (props) => {
  return (
    <p>{props.part} {props.exercises}</p>
  )
}

const Content = ({part, exercises}) => {
  return (
    <div>
      <Part part={part[0]} exercises={exercises[0]} />
      <Part part={part[1]} exercises={exercises[1]} />
      <Part part={part[2]} exercises={exercises[2]} />
    </div> 
  )
}

const Total = (props) => {
  return (
    <p>Number of exercises: {props.total}</p>
  )
}

const App = () => {
  const course = 'Half Stack application development';
  const parts = [ 'Fundamentals of React', 'Using props to pass data', 'State of a component' ];
  const exercises = [ 10, 7, 14 ];

  return (
    <div>
      <Header course={course} />
      <Content part={parts} exercises={exercises} />
      <Total total={exercises[0] + exercises[1] + exercises[2]} />
    </div>
  )
}

export default App