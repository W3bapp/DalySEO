import React, { useState } from 'react'
import Input from '@/text/Input'
import useI18n from '../../hooks/use-i18n'
import Section from '@/layout/Section'
import TextArea from '@/text/TextArea'
import Button from '@/buttons/Button'
import Paragraph from '@/text/Paragraph'
import { useSnackbar } from 'notistack'

function Offerte () {
	const i18n = useI18n()
	// const recipient = 'reangelo7@gmail.com';

	const recipient = 'info@dalyverhuizingen.nl'
	const [email, setEmail] = useState({ message: '', subject: '', userEmail: '', name: '' })
	const { enqueueSnackbar } = useSnackbar()
	const [offerte, setOfferte] = useState(
		{
			userPhone: '',
			departureAddress: '',
			departureAddressZipcode: '',
			arrivalAddress: '',
			arrivalAddressZipcode: '',
			stopOverAddress: '',
			stopOverAddressZipcode: '',
			departureDate: '',
			typeWoning: 'portiekwoning',
			stairsPresent:true,
			liftPresent:false,
			level:0,
			truck: true,
			truckDays: 'Halve dag (max 4uur)',
			employers: false,
			employersNumbers: 1,
			employersDays: 'Halve dag (max 4uur)',
			spoed: false,
			inboedel: "",
		},
	)

	const handleChange = ({ name, value }) => setEmail({ ...email, [name]: value })

	const handleOfferte = ({ name, value }) => {

		//For booleans
		if (value === 'true' || value === 'false') {
			value = JSON.parse(value)
			setOfferte({ ...offerte, [name]: value })
		} else {
			setOfferte({ ...offerte, [name]: value })
		}
	}

	const handleSubmit = (event) => {

		let emailObject = {
			body: `
			    Nieuw offerte van Meneer / Mevrouw ${email.name}, 
			    Email: ${email.userEmail}, 
			    Telefoonnummer: ${offerte.userPhone}, 
			    Wilt het volgende: 
			    Vertrekadres: ${offerte.departureAddress} ${offerte.departureAddressZipcode},
			    Aankomstadres: ${offerte.arrivalAddress} ${offerte.arrivalAddressZipcode},
			    Tussenstop adress: ${offerte.stopOverAddress} ${offerte.stopOverAddressZipcode},
			    Verhuisdatum: ${offerte.departureDate},
			    Type woning: ${offerte.typeWoning},
			    Aantal verdiepingen: ${offerte.level},
			    Trap aanwezig: ${offerte.stairsPresent},
			    Lift aanwezig: ${offerte.liftPresent},
			    Wilt verhuiswagen huren: ${offerte.truck},
			    Aantal dagen verhuiswagen huren: ${offerte.truckDays},
			    Wilt verhuiskrachten huren: ${offerte.employers}
			    Aantal verhuiskrachten huren: ${offerte.employers ? offerte.employersNumbers : 0},
			    Aantal dagen verhuiskrachten huren: ${offerte.employers ? offerte.employersDays : 0},
			    Spoed :${offerte.spoed}
			    Zegt het volgende over de inboedel: ${offerte.inboedel}		   
			    Heeft de volgende opmerkingen: ${email.message}		   
			`,
			subject: `${offerte.spoed
				? `OFFERTE - SPOEDBERICHT via de website van: ${email.userEmail}`
				: `OFFERTE nieuw bericht via de website van ${email.userEmail}`}`,
			recipient: recipient,
		}

		fetch('https://mail.api.asrr-tech.com/mail/send/simple', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(emailObject),
		}).then(function (response) {
			if (response.ok) {
				enqueueSnackbar('Bericht successvol verstuurd', { variant: 'success' })
			} else {
				response.json().then(function (object) {
					enqueueSnackbar('Bericht kon niet verstuurd worden, probeer het opnieuw of via de mail',
						{ variant: 'error' })
				})
				throw new Error(response.statusText)
			}
		}).catch(error => {
			enqueueSnackbar('Bericht kon niet verstuurd worden, probeer het opnieuw of via de mail',
				{ variant: 'error' })
		})
		event.preventDefault()
	}

	return (
		<Section id="contact-page" className="padding-bottom">

			<div className="contact">

				<Paragraph title="offerte.title" text="offerte.text"/>

				<form onSubmit={handleSubmit} id="contact-form" className="form">

					<Input onChange={(e) => handleChange(e.target)} value={email.name} className="no-margin"
						   name="name" type="text" label={i18n.t('contact.form.name')} placeholder="Hier uw naam..."
						   required={true}/>

					<Input onChange={(e) => handleChange(e.target)} value={email.userEmail} className="no-margin"
						   name="userEmail" type="text" label={i18n.t('contact.form.email')}
						   placeholder="Hier uw email..."
						   required={true}/>

					<Input onChange={(e) => handleOfferte(e.target)} value={offerte.userPhone} className="no-margin"
						   name="userPhone" type="text" label={i18n.t('offerte.form.phone')}
						   placeholder="Hier uw telefoonnummer..."
						   required={true}/>

					<Input onChange={(e) => handleOfferte(e.target)} value={offerte.departureAddress}
						   className="no-margin"
						   name="departureAddress" type="text" label={i18n.t('offerte.form.departure')}
						   placeholder="Vertrekadres"
						   required={true}/>

					<Input onChange={(e) => handleOfferte(e.target)} value={offerte.departureAddressZipcode}
						   className="no-margin"
						   name="departureAddressZipcode" type="text" label={i18n.t('offerte.form.departureZipcode')}
						   placeholder="Postcode vertrekadres"
						   required={true}/>

					<Input onChange={(e) => handleOfferte(e.target)} value={offerte.arrivalAddress}
						   className="no-margin"
						   name="arrivalAddress" type="text" label={i18n.t('offerte.form.arrival')}
						   placeholder="Aankomstadres"
						   required={true}/>

					<Input onChange={(e) => handleOfferte(e.target)} value={offerte.arrivalAddressZipcode}
						   className="no-margin"
						   name="arrivalAddressZipcode" type="text" label={i18n.t('offerte.form.arrivalZipcode')}
						   placeholder="Postcode aankomstadres"
						   required={true}/>

					<Input onChange={(e) => handleOfferte(e.target)} value={offerte.stopOverAddress}
						   className="no-margin"
						   name="stopOverAddress" type="text" label={i18n.t('offerte.form.stopover')}
						   placeholder="Tussenadress"
						   required={false}/>

					<Input onChange={(e) => handleOfferte(e.target)} value={offerte.stopOverAddress}
						   className="no-margin"
						   name="stopOverAddressZipcode" type="text" label={i18n.t('offerte.form.stopoverZipcode')}
						   placeholder="Postcode tussenadres"
						   required={false}/>

					<Input onChange={(e) => handleOfferte(e.target)} value={offerte.departureDate} className="no-margin"
						   name="departureDate" type="date" label={i18n.t('offerte.form.departureDate')}
						   placeholder="Postcode aankomstadres"
						   required={true}/>

					<label htmlFor="select-woning">{i18n.t('offerte.form.woningtype')}</label>
					<select id="select-woning" onChange={(e) => handleOfferte(e.target)} name="typeWoning">
						<option value={'portiekwoning'}>Portiekwoning</option>
						<option value={'flat'}>Flat</option>
						<option value={'eengezinswoning'}>Eengezinswoning</option>
						<option value={'vrijstaande woning'}>Vrijstaande woning</option>
						<option value={'eengezinswoning'}>Eengezinswoning</option>
						<option value={'verzorgingshuis'}>Verzorgingshuis</option>
					</select>

					<Input onChange={(e) => handleOfferte(e.target)} value={offerte.level} className="no-margin"
						   name="level" type="number" min={0} label={i18n.t('offerte.form.level')}
						   placeholder="Aantal verdiepingen"
						   required={true}/>

					<label>{i18n.t('offerte.form.trap')}</label>
					<div className="flex-start checkbox">

						<span className="flex-start">
							<label htmlFor="checkbox-trap">trap &nbsp;</label>
							<input onChange={(e) => handleOfferte(e.target)} defaultChecked={offerte.stairsPresent} value={offerte.stairsPresent}  id="checkbox-trap" name="stairsPresent" type="checkbox"/>
						</span>

						<span className="flex-start">
							<label htmlFor="checkbox-lift">lift &nbsp;</label>
							<input onChange={(e) => handleOfferte(e.target)}  defaultChecked={offerte.liftPresent} value={offerte.liftPresent}  id="checkbox-lift" name="liftPresent" type="checkbox"/>
						</span>

					</div>


					<label htmlFor="select-truck">{i18n.t('offerte.form.truck')}</label>
					<select id="select-truck" onChange={(e) => handleOfferte(e.target)} name="truck">
						<option value={true}>Ja</option>
						<option value={false}>nee</option>
					</select>

					<label htmlFor="select-days-truck">{i18n.t('offerte.form.truck_days')}</label>
					<select disabled={!offerte.truck} id="select-days-truck" onChange={(e) => handleOfferte(e.target)}
							name="truckDays">
						<option value="Halve dag (max 4uur)">Halve dag (max 4uur)</option>
						<option value="1 dag">1 dag (max 8uur)</option>
						<option value="2 dagen">2 dagen (max 8uur / dag)</option>
						<option value="3 dagen">3 dagen (max 8uur / dag)</option>
					</select>

					<label htmlFor="select-employers">{i18n.t('offerte.form.employers')}</label>
					<select id="select-employers" onChange={(e) => handleOfferte(e.target)}
							name="employers">
						<option value={false}>Nee</option>
						<option value={true}>Ja</option>
					</select>

					<label htmlFor="select-employers-numbers">{i18n.t('offerte.form.employers_numbers')}</label>
					<select disabled={!offerte.employers} id="select-employers-numbers"
							onChange={(e) => handleOfferte(e.target)}
							name="employersNumbers">
						<option value="1">1</option>
						<option value="2">2</option>
						<option value="3">3</option>
					</select>

					<label htmlFor="select-days-employers">{i18n.t('offerte.form.employers_days')}</label>
					<select disabled={!offerte.employers} id="select-days-employers"
							onChange={(e) => handleOfferte(e.target)} name="employersDays">
						<option value="Halve dag (max 4uur)">Halve dag (max 4uur)</option>
						<option value="1 dag">1 dag (max 8uur)</option>
						<option value="2 dagen">2 dagen (max 8uur)</option>
						<option value="3 dagen">3 dagen (max 8uur)</option>
					</select>

					<label htmlFor="select-spoed">{i18n.t('offerte.form.spoed')}</label>
					<select id="select-spoed" onChange={(e) => handleOfferte(e.target)} name="spoed">
						<option value={false}>Geen spoed</option>
						<option value={true}>Wel spoed</option>
					</select>

					<TextArea onChange={(e) => handleChange(e.target)} value={offerte.inboedel} name="inboedel"
							  placeholder="Korte omschrijving inboedel..."
							  type="text" label={i18n.t('offerte.form.inboedel')}/>

					<TextArea onChange={(e) => handleChange(e.target)} value={email.message} name="message"
							  placeholder="Hier uw bericht..."
							  type="text" label={i18n.t('contact.form.message')}/>

					<span className="privacy">
                        <span className="privacy-akkoordverklaring"><input id="privacy-verklaring" required={true}
																		   type="checkbox"/>
                        <label htmlFor="privacy-verklaring" className="text">Akkoordverklaring</label></span>
						<p className="label">{i18n.t('offerte.form.offertePrivacy')} <a href="/assets/documents/Privacyverklaring-Daly-Verhuizingen.pdf" target="_blank"
																						rel="noopener noreferrer">privacybeleid</a></p>
						<p className="label">*Verplicht</p>
                     </span>

					<Button title="contact.form.button" className="margin-bottom-medium"/>

				</form>

			</div>

		</Section>
	)
}

export default Offerte
