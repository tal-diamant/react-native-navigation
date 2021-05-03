import React from 'react';
import {Formik} from 'formik';
import { Button, Text, TextInput, View } from 'react-native';
import { globalStyles } from '../styles/global';
import * as yup from 'yup';
import FlatButton from '../components/flat-button/FlatButton';

const reviewSchema = yup.object({
    title: yup.string().required().min(4),
    body: yup.string().required().min(8),
    rating: yup.string().required().test('check rating validity', 'rating must be a number between from 1 - 5',
    (val) => {
        return (+val < 6 && +val > 0);
    }),
    name: yup.string().required().min(2),
});

export default function ReviewForm({addReview}) {
    return (
        <View style={globalStyles.container}>
            <Formik
                initialValues={{title: '', body: '', rating: '', name: ''}}
                validationSchema={reviewSchema}
                onSubmit={(values, actions) => {
                    actions.resetForm();
                    addReview(values);
                }}
            >
                {(formikProps) => (
                    <View>
                        <TextInput
                            style={globalStyles.input}
                            placeholder='Review Name'
                            onChangeText={formikProps.handleChange('name')}
                            value={formikProps.values.name}
                            onBlur={formikProps.handleBlur('name')}
                        />
                        <Text style={globalStyles.errorText}>{ formikProps.touched.name && formikProps.errors.name }</Text>

                        <TextInput 
                            style={globalStyles.input}
                            placeholder='Review Title'
                            onChangeText={formikProps.handleChange('title')}
                            value={formikProps.values.title}
                            onBlur={formikProps.handleBlur('title')}
                        />
                        <Text style={globalStyles.errorText}>{ formikProps.touched.title && formikProps.errors.title }</Text>

                        <TextInput 
                            multiline
                            style={globalStyles.input}
                            placeholder='Review Body'
                            onChangeText={formikProps.handleChange('body')}
                            value={formikProps.values.body}
                            onBlur={formikProps.handleBlur('body')}
                        />
                        <Text style={globalStyles.errorText}>{ formikProps.touched.body && formikProps.errors.body }</Text>

                        <TextInput 
                            style={globalStyles.input}
                            placeholder='Rating (1-5)'
                            onChangeText={formikProps.handleChange('rating')}
                            value={formikProps.values.rating}
                            keyboardType='numeric'
                            onBlur={formikProps.handleBlur('rating')}
                        />
                        <Text style={globalStyles.errorText}>{ formikProps.touched.rating && formikProps.errors.rating }</Text>

                        <FlatButton text='Submit' onPress={formikProps.handleSubmit} />
                    </View>
                )}
            </Formik>
        </View>
    )
}