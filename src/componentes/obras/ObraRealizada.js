import React from 'react';

// Material UI
import Button from '@material-ui/core/Button';

function ObraRealizada({realizarObra,productos}) {
    return (
        <div>
            { productos.length > 0 ? (
                <form onSubmit={realizarObra}>
                    <Button type="submit"
                        variant="contained"
                        className="realizar-obra">
                        Realizar Obra
                            </Button>
                </form>
             ): null}
        </div>
    )
}

export default ObraRealizada