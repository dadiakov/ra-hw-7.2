/* eslint-disable array-callback-return */
/* eslint-disable default-case */
import AddFineArticle from "./AddFineArticle";
import AddFineVideo from "./AddFineVideo";
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';

export default function List(props) {
    return props.list.map((item) => {
      switch (item.type) {
        case 'video':
          return <AddFineVideo {...item} key={uuidv4()} />;
  
        case 'article':
          return <AddFineArticle {...item} key={uuidv4()} />;
      }
    });
}

List.propTypes = {
    list: PropTypes.array,
}

List.defaultProps = {
    list: [],
}