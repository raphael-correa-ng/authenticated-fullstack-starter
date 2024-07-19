import useMyModels from '../../hooks/useMyModels'
import MyService from '../../services/MyService'
import Header from '../index/Header'

interface Props {
  myService: MyService;
}

function MyModels(props: Props) {
  const { myService } = props;

  const myModels = useMyModels(myService)

  return <div>
    <div className="container">
      <Header
        title="Logged in to Authenticated Fullstack Starter"
        subtitle="Objects from backend:"/>

      {
        myModels.map((myModel, index) =>
          <p key={index}>{ JSON.stringify(myModel) }</p>
        )
      }
    </div>
  </div>
}

export default MyModels;