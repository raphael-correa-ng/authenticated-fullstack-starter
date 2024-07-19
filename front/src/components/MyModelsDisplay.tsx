import useMyModels from '../hooks/useMyModels'
import MyService from '../services/MyService'

interface Props {
  myService: MyService;
}

function MyModelsDisplay(props: Props) {
  const {myService} = props;

  const myModels = useMyModels(myService)

  return <div>
    <p>Objects obtained from backend:</p>
    {
      myModels.map((myModel, index) =>
        <p key={index}>{ JSON.stringify(myModel) }</p>
      )
    }
  </div>
}

export default MyModelsDisplay;