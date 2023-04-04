import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function Navigation() {
  return (
    <div className='text-center'>
        <label className='my-2'>Correo:</label>
        <Form.Control type="email" placeholder="name@example.com" />
        <label className='mb-2 mt-4'>Descripción:</label>
        <Form.Control
          as="textarea"
          placeholder="Leave a comment here"
          style={{ height: '100px' }}
          
        />
        <Button variant="danger" className='mt-3'>Enviar</Button>

    </div>
  );
}
