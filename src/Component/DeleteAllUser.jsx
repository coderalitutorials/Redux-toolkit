
import styled from 'styled-components';
import { deletUser } from '../Store/Slices/UserSlice';
// import { deletUser } from '../Store/Actions';
import { useDispatch } from 'react-redux';
function DeleteAllUser() {
const dispatch = useDispatch()
  const clearUser= ()=>{
     dispatch(deletUser())
  }

  return (
    <Wrapper>
      <button className='clear-btn' onClick={clearUser}>clear users</button>
    </Wrapper>
  )
}
const Wrapper = styled.section`
.clear-btn{
  text-transform:capitilize;
  background-color:#db338a;
  padding:10px;
  color:white;
  font-size:30px;
  border-radius:5px;
  margin-top:2rem;
}
`
export default DeleteAllUser;

