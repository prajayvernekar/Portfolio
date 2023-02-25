import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import DownloadIcon from '@mui/icons-material/Download';
import SchoolIcon from '@mui/icons-material/School';
import CodeOffSharpIcon from '@mui/icons-material/CodeOffSharp';
import LanguageSharpIcon from '@mui/icons-material/LanguageSharp';

export default function LabelBottomNavigation() {
    const [value, setValue] = React.useState('recents');
    const [Active, setActive] = React.useState(0)

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const Handleclick = (i)=>{
        setActive(i);
    }

    return (
        <BottomNavigation sx={{ width: 500, borderRadius: "10px", backgroundColor: "#1d4ed8", boxShadow:"-2px 2px 25px 2px gray" }} value={value} onChange={handleChange}>
          
          { [['GetDocs',<DownloadIcon />],
            ['Education',<SchoolIcon />],
            ['Skills', <CodeOffSharpIcon/>],
            ['Language',<LanguageSharpIcon/>]].map((item,i)=>(
                <BottomNavigationAction 
                key={i}
                onClick={()=>Handleclick(i)}
                label={item[0]}
                style={{color:Active === i? "#a5f3fc" : "white", transform: "rotate(270deg)"}}
                icon={<a href={`#${item[0]}`}>{item[1]}</a>}
            />
            ))
          }
        </BottomNavigation>
    );
}   