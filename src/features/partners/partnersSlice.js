import { PARTNERS } from '../../app/shared/PARTNERS'

export const selectPartners = () => {
    return PARTNERS; 
}

export const selectFeaturedPartner = () => {
    
    return PARTNERS.find((partner) => partner.featured);
}

export const selectAllPartners = () => {
    return PARTNERS;
}