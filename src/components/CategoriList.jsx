import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { Categori } from './Categori';

function CategoriList(props) {
    const { categori = [] } = props;

    return (
        <Box sx={{ width: 1000, height: 450, overflowY: 'none' }}>
            <ImageList variant='masonry' cols={3} gap={8}>
                {categori.map((item) => (
                    <ImageListItem key={item.img}>
                        <div className='categoriList'>
                        <Categori key={item.id} {...item} />
                        </div>
                    </ImageListItem>
                ))}
            </ImageList>
        </Box>
    );
}
export { CategoriList };
