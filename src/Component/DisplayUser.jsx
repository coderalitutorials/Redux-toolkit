import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import styled from 'styled-components'
import { removeUser } from '../Store/Slices/UserSlice'
function DisplayUser() {
      const dispatch = useDispatch();

    const data = useSelector((state)=>{
          return state.user
    })
    console.log(data)

    const deleteuser = (id)=>{
      dispatch(removeUser(id))
    }
  return (
       <Wrapper>
        {
            data.map((user,id)=>{
                return <li key={id}>
                    {user}
                    <button className='btn-delete' onClick={()=>deleteuser(id)}>
                 delete
                    </button>
                </li>
            })
        }
       </Wrapper>
  )
}

const Wrapper = styled.section`
li{
    width:100%;
    display:flex;
    align-items:center;
    justify-content:space-between;
    padding:1rem;
    border-bottom:1px solid #eee;

    &:first-child{
        border-top: 1px solid #eee
    }
}
.btn-delete{
    padding: 5px;
    background: red;
    color:white
}
`

export default DisplayUser;