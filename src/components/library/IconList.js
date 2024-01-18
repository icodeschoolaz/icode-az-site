import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import { Avatar } from '@mui/material';

const IconList = (props) => {
    const {list, cssClass, avatarClass } = props;
    return (
        <List sx={{ width: '100%' }}>
            {list && list.map((x, idx) => {
                return (
                    <ListItem key={`iconlist-${idx}`}>
                      <ListItemAvatar>
                        <Avatar className={avatarClass}>
                          {x.Icon}
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText primary={x.primaryText} secondary={x.secondaryText} className={cssClass} />
                    </ListItem>
                )
            })}
        </List>
    )
}

export default IconList;