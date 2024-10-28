import PropTypes from 'prop-types';
const Link = ({route}) => {
    return (
        <li className="mr-3 px-6 hover:bg-red-500"><a href={`route.path`}>{route.name}</a></li>
    );
};

export default Link;
Link.propTypes={
route:PropTypes.object
}