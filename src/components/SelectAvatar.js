import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
// import avatarData from './avatarData'

export default function SelectAvatar(props) {



  

  function toggle(id) {
    props.isSelected.map(data => {
      return props.setSelectedAvatar(prevData => data.clicked === true ? data.title : prevData)
    })

      props.setIsSelected(prevData => {
        return prevData.map((avatar) => {
            return avatar.id === id ? {...avatar, clicked: !avatar.clicked} : {...avatar, clicked: false}
              
        })
    })
   
}

  React.useEffect(() => {
    console.log(props.selectedAvatar)
  })

    return (
      <ImageList sx={{ width: '100%'}} cols={5} gap={5} >
        {props.isSelected.map((item) => (
          <ImageListItem 
            style={{margin: '10px', display: 'flex'}} 
             
            key={item.img} 
            id={item.title} 
            >
            <img
                src={item.img}
                alt={item.title}
                onClick={() =>toggle(item.id)}
                className={item.clicked ? "selectedAvatar" : "avatarList"}
                style={{
                  verticalAlign: 'middle',
                  display: 'flex',
                  width: '70px',
                  height: '70px',
                  borderRadius: '50%',
                  padding:0,
                  margin: '0 auto',
              }}
            />
          </ImageListItem>
        ))}
      </ImageList>
    );
  }
  
  