import PropTypes from 'prop-types';
import { Container, Row, Col, Image, Alert } from 'react-bootstrap';
import styles from './ErrorHandler.module.css';
import errorImage from './error-image.jpg';

const ErrorHandler = ({ message, imgSrc = errorImage }) => {
    return (
        <div className={styles.errorContainer}>
            <Container>
                <Row className="justify-content-center align-items-center">
                    <Col xs={12} md={6}>
                        <Alert className={styles.alert} variant="danger">
                            <h3>Something Went Wrong</h3>
                            <p>{message}</p>
                        </Alert>
                    </Col>
                    <Col xs={12} md={4}>
                        <Image
                            src={imgSrc}
                            alt="Error Illustration"
                            fluid
                            className={styles.image}
                        />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

// Prop validation for message
ErrorHandler.propTypes = {
    message: PropTypes.string.isRequired, 
    imgSrc: PropTypes.string, 
};

export default ErrorHandler;

