import React from 'react';
import Badge from '@material-ui/core/Badge';
import { withStyles } from '@material-ui/core/styles';
import "./cart.css";
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const StyledBadge = withStyles((theme) => ({
    badge: {
        right: -3,
        top: 5,
        border: `1px solid ${theme.palette.background.paper}`,
        padding: '0 4px',
    },
}))(Badge);


const Cart = ({ number }) => {
    return (
        <IconButton aria-label="cart">
            <StyledBadge badgeContent={number} color="error">
                <ShoppingCartIcon />
            </StyledBadge>
        </IconButton>
    );
}

export default Cart;
