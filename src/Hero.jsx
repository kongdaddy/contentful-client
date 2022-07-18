export const Hero = (props) => {
    const { options } = props;
    return <img src={options.url} alt="test hero content" />
}